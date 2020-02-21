CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "content" TEXT,
    "modified" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "folderid" INTEGER REFERENCES folders(id) ON DELETE CASCADE NOT NULL
);