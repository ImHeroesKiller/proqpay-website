CREATE TABLE PortalUser (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL COLLATE NOCASE,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('ADMIN','CLIENT')),
  application_id TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
CREATE INDEX idx_portal_user_application ON PortalUser(application_id);
