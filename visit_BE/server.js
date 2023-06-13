import express from 'express'
import fs from 'node:fs/promises'

const app = express();
const PORT = process.env.PORT || 3001;

const visitorCountFile = 'visitorCount.txt'

const getVisitorCount = async () => {
    try {
        const count = await fs.readFile(visitorCountFile, 'utf8')
        return parseInt(count);
    } catch (error) {
        console.error('not possible to read file', error)
        return 0
    }
}

const updateVisitorCount = async (count) => {
    try {
        await fs.writeFile(visitorCountFile, count.toString())
    } catch (error) {
        console.error('not possible to update file', error)
    }
}

let visitorCount = await getVisitorCount()


app.get('/visit', (req, res) => {
    visitorCount++;
    res.send(`${visitorCount}`);
});

app.get('/visited', (req, res) => {
    updateVisitorCount(visitorCount)
    res.send(`Total visitors: ${visitorCount}`)
})

app.listen(3001, () => {
    console.log(`Server runs on port ${PORT}`);
})