ALTER TABLE ClientApplication ADD COLUMN client_token_hash TEXT;
ALTER TABLE ClientApplication ADD COLUMN assessment_score INTEGER;
ALTER TABLE ClientApplication ADD COLUMN assessment_notes TEXT;
ALTER TABLE ClientApplication ADD COLUMN award_title TEXT;
ALTER TABLE ClientApplication ADD COLUMN award_value REAL;
ALTER TABLE ClientApplication ADD COLUMN award_terms TEXT;
ALTER TABLE ClientApplication ADD COLUMN decision_at TEXT;
CREATE UNIQUE INDEX idx_client_token ON ClientApplication(client_token_hash);
CREATE TABLE ApplicationActivityLog (
  id TEXT PRIMARY KEY, application_id TEXT NOT NULL, action TEXT NOT NULL, actor_type TEXT NOT NULL,
  actor_id TEXT, detail_json TEXT, created_at TEXT NOT NULL,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
CREATE INDEX idx_activity_application ON ApplicationActivityLog(application_id, created_at);
