@echo off
setlocal

:: Get the root directory of the project
:: Script is in 0_proyecto/scripts, so root is two levels up
set "SCRIPT_DIR=%~dp0"
set "ROOT_DIR=%SCRIPT_DIR%..\..\"
set "SRC_DOCS=%ROOT_DIR%src\content\docs"

:: Create the target directory if it doesn't exist
if not exist "%SRC_DOCS%" mkdir "%SRC_DOCS%"

:: Array of folder mappings (Source|DestinationName)
set "MAPPINGS=0_proyecto|proyecto 1_trasfondo|trasfondo 2_atlas|atlas 3_personajes|personajes 4_diegesis|diegesis 5_aventuras|aventuras 6_media|media"

setlocal enabledelayedexpansion
for %%M in (%MAPPINGS%) do (
    for /f "tokens=1,2 delims=|" %%A in ("%%M") do (
        set "SOURCE=%ROOT_DIR%%%A"
        set "TARGET=%SRC_DOCS%\%%B"
        
        if exist "!TARGET!" (
             echo Link or folder already exists: !TARGET!
        ) else (
             echo Creating junction: !TARGET! takes content from !SOURCE!
             mklink /J "!TARGET!" "!SOURCE!"
        )
    )
)

echo Done.
pause
