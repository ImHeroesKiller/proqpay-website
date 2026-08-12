CREATE TABLE Assessment (
  id TEXT PRIMARY KEY, application_id TEXT NOT NULL, overall_score INTEGER NOT NULL, risk_level TEXT NOT NULL,
  recommendation TEXT NOT NULL, legal_score INTEGER NOT NULL, financial_score INTEGER NOT NULL,
  operational_score INTEGER NOT NULL, credit_score INTEGER NOT NULL, management_score INTEGER NOT NULL,
  compliance_score INTEGER NOT NULL, recommended_credit_limit REAL NOT NULL, payroll_exposure_ratio REAL,
  ai_summary TEXT NOT NULL, model_version TEXT NOT NULL, created_at TEXT NOT NULL,
  FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
CREATE INDEX idx_assessment_application ON Assessment(application_id, created_at);
CREATE TABLE AssessmentFinding (
  id TEXT PRIMARY KEY, assessment_id TEXT NOT NULL, category TEXT NOT NULL, finding TEXT NOT NULL,
  evidence TEXT NOT NULL, source TEXT NOT NULL, risk_level TEXT NOT NULL, confidence TEXT NOT NULL,
  risk_impact TEXT NOT NULL, created_at TEXT NOT NULL, FOREIGN KEY(assessment_id) REFERENCES Assessment(id)
);
CREATE TABLE WebResearchResult (
  id TEXT PRIMARY KEY, assessment_id TEXT NOT NULL, query TEXT NOT NULL, url TEXT NOT NULL,
  title TEXT NOT NULL, summary TEXT NOT NULL, sentiment TEXT NOT NULL, risk_flag INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL, FOREIGN KEY(assessment_id) REFERENCES Assessment(id)
);
CREATE TABLE AssessmentDecision (
  id TEXT PRIMARY KEY, assessment_id TEXT NOT NULL, application_id TEXT NOT NULL, decision TEXT NOT NULL,
  reviewer TEXT NOT NULL, reason TEXT NOT NULL, override_reason TEXT, created_at TEXT NOT NULL,
  FOREIGN KEY(assessment_id) REFERENCES Assessment(id), FOREIGN KEY(application_id) REFERENCES ClientApplication(id)
);
