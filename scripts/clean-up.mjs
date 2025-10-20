#!/usr/bin/env node
/**
 * Cleanup script for common project build and cache directories.
 * Deletes: node_modules, .next, pnpm-lock.yaml, .turbo, dist
 * Scans: current directory, apps/, packages/
 */

import fs from "node:fs";
import path from "node:path";

const targets = ["node_modules", ".next", "pnpm-lock.yaml", ".turbo", "dist"];
const subDirs = ["apps", "packages", "configs"];

/**
 * Recursively delete a file or directory if it exists.
 */
function removeRecursive(targetPath) {
  if (fs.existsSync(targetPath)) {
    try {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`🗑️ Removed: ${targetPath}`);
    } catch (err) {
      console.error(`❌ Failed to remove ${targetPath}:`, err.message);
    }
  } else {
    console.log(`⚪ Skipped (not found): ${targetPath}`);
  }
}

/**
 * Run cleanup for a single directory.
 */
function cleanup(dir) {
  console.log(`\n🧹 Cleaning: ${dir}`);
  for (const target of targets) {
    const targetPath = path.join(dir, target);
    removeRecursive(targetPath);
  }
}

/**
 * Get subdirectories inside a directory.
 */
function getSubdirectories(baseDir) {
  if (!fs.existsSync(baseDir)) return [];
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(baseDir, entry.name));
}

/**
 * Main
 */
function main() {
  const rootDir = process.cwd();

  // clean root
  cleanup(rootDir);

  // clean subfolders in apps/ and packages/
  for (const subDir of subDirs) {
    const subDirPath = path.join(rootDir, subDir);
    const subfolders = getSubdirectories(subDirPath);

    for (const folder of subfolders) {
      cleanup(folder);
    }
  }

  console.log(`\n✅ Cleanup complete!\n`);
}

main();
