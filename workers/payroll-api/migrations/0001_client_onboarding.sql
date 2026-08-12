PRAGMA foreign_keys = ON;
CREATE TABLE ClientApplication (
  id TEXT PRIMARY KEY, registration_number TEXT UNIQUE NOT NULL, status TEXT NOT NULL DEFAULT 'DRAFT',
  company_json TEXT NOT NULL, contact_json TEXT NOT NULL, payroll_json TEXT NOT NULL, funding_json TEXT,
  consent_json TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, submitted_at TEXT,
  deleted_at TEXT, retention_until TEXT NOT NULL
);
CREATE INDEX idx_client_application_status ON ClientApplication(status, created_at);
CREATE TABLE ClientApplicationDocument (
  id TEXT PRIMARY KEY, application_id TEXT NOT NULL, category TEXT NOT NULL, document_type TEXT NOT NULL,
  original_filename TEXT NOT NULL, storage_key TEXT UNIQUE NOT NULL, mime_type TEXT NOT NULL, size_bytes INTEGER NOT NULL,
  checksum TEXT, created_at TEXT NOT NULL, deleted_at TEXT,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
CREATE INDEX idx_document_application ON ClientApplicationDocument(application_id, category);
CREATE TABLE DocumentAuditLog (
  id TEXT PRIMARY KEY, application_id TEXT NOT NULL, document_id TEXT, action TEXT NOT NULL, actor_type TEXT NOT NULL,
  actor_id TEXT, ip_hash TEXT, detail_json TEXT, created_at TEXT NOT NULL,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id), FOREIGN KEY(document_id) REFERENCES ClientApplicationDocument(id)
);
CREATE INDEX idx_audit_application ON DocumentAuditLog(application_id, created_at);
