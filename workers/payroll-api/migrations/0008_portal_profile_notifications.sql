ALTER TABLE PortalUser ADD COLUMN display_name TEXT;
ALTER TABLE PortalUser ADD COLUMN email TEXT;
CREATE TABLE EmailNotification (id TEXT PRIMARY KEY,application_id TEXT NOT NULL,recipient TEXT NOT NULL,subject TEXT NOT NULL,body TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'PENDING',error TEXT,created_at TEXT NOT NULL,sent_at TEXT,FOREIGN KEY(application_id) REFERENCES ClientApplication(id));
CREATE INDEX idx_email_notification_status ON EmailNotification(status,created_at);
