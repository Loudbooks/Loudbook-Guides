---
sidebar_position: 4
---

# Hosting a Forge Server
This guide will walk you through creating a Forge server. This server will support Forge mods exclusively. Please note that running mods can be highly unstable and may require more resources than a vanilla server.

## Requirements
- A computer that will be on when you or your friends want to play
- A good internet connection
- A basic understanding of networking
- At least 5GB or more of RAM free at all times

## Steps
1. Head over to the [official website](https://files.minecraftforge.net/) and find the version of Forge that you want to use.
2. Download the installer for the version of Forge that you want to use.
:::info
You may get sent to an AdFoc page, just wait a few seconds and click "Skip" in the top right corner.
:::
3. Create an empty folder on your computer in a place where you can easily access it.
4. Double click on the installer to run it.
5. Select "Install server" and choose the folder we created previously.
6. Click "OK" and wait for the installer to finish.
7. Open the folder and find the `forge-<version>-universal.jar` file.
8. Rename the file to `forge.jar`.
9. Create a new text file in the folder and name it `start.bat` if you are on Windows or `start.sh` if you are on MacOS or Linux.
10. Open the file and paste the following code:
```bash
java -Xmx5G -Xms5G -jar forge.jar nogui
pause
```

:::info
This code will allocate 5GB of RAM to the server. If you have more RAM available, you can increase the `-Xmx` and `-Xms` values.
:::

11. Save the file and double click on it to start the server.
12. Open the `eula.txt` file and change `eula=false` to `eula=true`.
13. Double click on the `start.bat` or `start.sh` file again to start the server.
14. Share your IP address with your friends. You can find your IP address by searching "what is my IP" on Google.
15. Have your friends open Minecraft and click on "Multiplayer". Then click on "Add Server" and enter your IP address.