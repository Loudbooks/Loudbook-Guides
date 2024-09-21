---
sidebar_position: 3
---

# Hosting a Fabric Server
This guide will walk you through how to host a Fabric server that will support Fabric mods. Please note running mods can be highly unstable and may require more resources than a vanilla server.

## Requirements
- A computer that will be on when you or your friends want to play
- A good internet connection
- A basic understanding of networking
- At least 5GB of RAM free at all times

## Steps
1. Download the server software from the [official website](https://fabricmc.net/use/server/).
2. Create a new folder on your computer and place the server software in it.
3. Install [Java](/installing-java) on your computer.
3. Create a new text file in the folder and name it `start.bat` if you are on Windows or `start.sh` if you are on MacOS or Linux.
4. Open the file and paste the following code:
```bash
java -Xmx5G -Xms5G -jar fabric-server-launch.jar nogui
```
:::info
This code will allocate 5GB of RAM to the server. If you have more RAM available, you can increase the `-Xmx` and `-Xms` values.
:::
5. Save the file and double click on it to start the server.
6. Open the `eula.txt` file and change `eula=false` to `eula=true`.
7. Double click on the `start.bat` or `start.sh` file again to start the server.
8. Share your IP address with your friends. You can find your IP address by searching "what is my IP" on Google.
9. Have your friends open Minecraft and click on "Multiplayer". Then click on "Add Server" and enter your IP address.

## Tips
- Make sure your computer is powerful enough to run the server
- Keep your server software up to date
- Use a whitelist to prevent unwanted players from joining
- Back up your server regularly