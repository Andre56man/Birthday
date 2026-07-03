@echo off
cd /d "%~dp0"
echo Ouverture du site... (laisse cette fenetre ouverte pendant que tu regardes le site)
start "" http://localhost:8000
python -m http.server 8000
