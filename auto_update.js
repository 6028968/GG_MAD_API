#!/usr/bin/env node
const { exec } = require("child_process");
const interval = 300000;

function updateData()
{
    const step1 = `ssh -i ~/.ssh/rsa schoolpi@85.215.158.39 "sshpass -p '123raden!!' scp -P 4449 smartgarden@localhost:./GG/json/data.json /home/schoolpi/data/data.json"`;

    const step2 = `scp -i ~/.ssh/rsa schoolpi@85.215.158.39:./data/data.json /home/znooptokkie/school/Schooljaar_24-25/Mobile_Development/sensor-json/data.json`;

    exec(step1, (error, stdout, stderr) =>
    {
        if (error)
        {
            console.error(`Fout bij het kopiëren van smartgarden naar schoolpi: ${error.message}`);
            return;
        }

        if (stderr)
        {
            console.error(`Standaard fout (smartgarden naar schoolpi): ${stderr}`);
            return;
        }

        console.log("Bestand succesvol gekopieerd van smartgarden naar schoolpi!");

        exec(step2, (error2, stdout2, stderr2) =>
        {
            if (error2)
            {
                console.error(`Fout bij het kopiëren van schoolpi naar lokale PC: ${error2.message}`);
                return;
            }
        
            if (stderr2)
            {
                console.error(`Standaard fout (schoolpi naar PC): ${stderr2}`);
                return;
            }

            console.log("Bestand succesvol gekopieerd van schoolpi naar PC!");
        });
    });
}

updateData()
setInterval(updateData, interval);
