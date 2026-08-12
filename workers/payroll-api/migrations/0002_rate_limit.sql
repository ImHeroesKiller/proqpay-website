CREATE TABLE ApiRateLimit (key TEXT PRIMARY KEY, window_started INTEGER NOT NULL, request_count INTEGER NOT NULL);
