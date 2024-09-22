import { readdir } from 'fs/promises'; // Import async version of fs readdir
import { stat } from 'fs/promises';    // Import async version of fs stat
import { join } from 'path';           // Import path utility

// Function to check if a file is executable
async function isExecutable(filePath: any) {
    try {
        const fileStat = await stat(filePath);
        return (fileStat.mode & 0o111) ? true : false; // Check for executable bit
    } catch (err) {
        return false;
    }
}

async function getSystemCommands() {
    const pathEnv = process.env.PATH;   // Get the PATH environment variable
    const directories: any = pathEnv?.split(":"); // Split by ':' to get all directories
    const commands = [];

    // Loop through each directory in PATH
    for (const directory of directories) {
        try {
            const files = await readdir(directory); // List files in the directory
            for (const file of files) {
                const filePath = join(directory, file); // Get the full path
                if (await isExecutable(filePath)) {    // Check if it's executable
                    commands.push(file);                 // If executable, add to list
                }
            }
        } catch (err) {
              console.warn(`Failed to read directory: ${directory}`); // Handle unreadable directories
        }
    }

    return commands;
}

// Run the function to fetch commands and log the result
getSystemCommands().then((commands) => {
    // Manually include shell built-ins like 'cd', since they're not executables
    const builtInCommands = ['cd', 'exit', 'alias', 'source'];

    commands.forEach((cmd) => {
        if (builtInCommands.includes(cmd)) {
            console.log(`${cmd} (built-in command)`);
        }
    });
});