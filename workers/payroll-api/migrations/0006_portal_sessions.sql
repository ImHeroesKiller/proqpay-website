CREATE TABLE PortalSession (id TEXT PRIMARY KEY,token_hash TEXT UNIQUE NOT NULL,user_id TEXT NOT NULL,expires_at TEXT NOT NULL,created_at TEXT NOT NULL,FOREIGN KEY(user_id) REFERENCES PortalUser(id));
CREATE INDEX idx_portal_session_token ON PortalSession(token_hash,expires_at);
