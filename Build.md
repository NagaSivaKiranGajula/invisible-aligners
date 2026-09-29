Use this command from the project root:

```powershell
bun run build
```

To generate `dist-static`, run the Windows-compatible export steps, since the Bash script requires WSL:

```powershell
bun run build
bun run preview -- --port 3011 --host 127.0.0.1
```

Then capture the routes as done previously. The intended one-command version is:

```bash
bash scripts/static-export.sh
```

That works in Git Bash or WSL when WSL is properly installed.