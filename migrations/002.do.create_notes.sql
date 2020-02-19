CREATE TABLE "notes" (
    id SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    folderId TEXT NOT NULL
);