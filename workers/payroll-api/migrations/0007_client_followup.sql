CREATE TABLE ClientFollowUp (
  id TEXT PRIMARY KEY, application_id TEXT NOT NULL, type TEXT NOT NULL CHECK(type IN ('MESSAGE','DOCUMENT_REQUEST','ACTION_ITEM')),
  sender_role TEXT NOT NULL CHECK(sender_role IN ('ADMIN','CLIENT')), sender_name TEXT NOT NULL,
  subject TEXT, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'OPEN', due_date TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
CREATE INDEX idx_followup_application_created ON ClientFollowUp(application_id,created_at);
CREATE INDEX idx_followup_application_status ON ClientFollowUp(application_id,status);
