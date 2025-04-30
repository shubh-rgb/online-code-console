// GitCheatSheet.js
import React from 'react';
import './GitCheatSheet.css';

const GitCheatSheet = () => {
  return (
    <div className="git-page">
      <h1>📘 Git Cheat Sheet: Essential Commands & Workflow</h1>
      <p>
        Git is a distributed version control system that lets multiple people work on the same codebase
        without conflicts. Whether you're a solo developer or working in a team, Git is your best ally.
        Below is a comprehensive cheat sheet covering the most essential Git commands, workflows,
        and best practices every developer should know.
      </p>

      <h2>🔧 Initial Setup</h2>
      <pre><code>
# Configure your identity
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"

# Check your configuration
$ git config --list
      </code></pre>

      <h2>📁 Creating a Repository</h2>
      <pre><code>
# Initialize a new Git repository
$ git init

# Clone an existing repository
$ git clone https://github.com/username/repo.git
      </code></pre>

      <h2>📄 Basic Workflow</h2>
      <pre><code>
# Check the status of files
$ git status

# Track a new file
$ git add filename

# Track all changes
$ git add .

# Commit changes
$ git commit -m "Add feature"

# View commit history
$ git log
      </code></pre>

      <h2>🌿 Branching</h2>
      <pre><code>
# Create a new branch
$ git branch new-feature

# Switch to a branch
$ git checkout new-feature

# Create + switch
$ git checkout -b hotfix

# Merge a branch
$ git checkout main
$ git merge hotfix

# Delete a branch
$ git branch -d hotfix
      </code></pre>

      <h2>🌍 Remote Repositories</h2>
      <pre><code>
# Add a remote repo
$ git remote add origin https://github.com/user/repo.git

# View remotes
$ git remote -v

# Push changes
$ git push origin main

# Pull changes
$ git pull origin main
      </code></pre>

      <h2>💥 Undoing Changes</h2>
      <pre><code>
# Unstage a file
$ git reset filename

# Discard local changes
$ git checkout -- filename

# Amend last commit
$ git commit --amend

# Revert a commit (safe)
$ ggit revert &lt;commit-hash&gt;
      </code></pre>

      <h2>⭐ Best Practices</h2>
      <ul>
        <li>Commit often with meaningful messages</li>
        <li>Use branches for each feature or fix</li>
        <li>Push and pull regularly to stay synced</li>
        <li>Always pull before starting a new task</li>
        <li>Use `.gitignore` to exclude files you don’t want in the repo</li>
      </ul>

      <footer className="git-footer">
        <p>Explore more Git topics at <a href="https://git-scm.com/doc">git-scm.com</a> or continue learning in the Topics section.</p>
      </footer>
    </div>
  );
};

export default GitCheatSheet;