/*
  Warnings:

  - Added the required column `actualTime` to the `weeklyTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedTime` to the `weeklyTask` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "estimatedTime" INTEGER NOT NULL,
    "actualTime" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "startTime" DATETIME,
    "endTime" DATETIME,
    "timeLineId" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "task_timeLineId_fkey" FOREIGN KEY ("timeLineId") REFERENCES "TimeLine" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_task" ("actualTime", "completed", "createdAt", "date", "endTime", "estimatedTime", "id", "startTime", "status", "text", "timeLineId", "updatedAt") SELECT "actualTime", "completed", "createdAt", "date", "endTime", "estimatedTime", "id", "startTime", "status", "text", "timeLineId", "updatedAt" FROM "task";
DROP TABLE "task";
ALTER TABLE "new_task" RENAME TO "task";
CREATE TABLE "new_weeklyTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "estimatedTime" INTEGER NOT NULL,
    "actualTime" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME,
    "endTime" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "weeklyTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_weeklyTask" ("completed", "createdAt", "date", "id", "text", "updatedAt", "userId") SELECT "completed", "createdAt", "date", "id", "text", "updatedAt", "userId" FROM "weeklyTask";
DROP TABLE "weeklyTask";
ALTER TABLE "new_weeklyTask" RENAME TO "weeklyTask";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
