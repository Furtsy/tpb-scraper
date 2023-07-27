TPB Scraper
---
easy tpb scraper

[Discord](https://discord.com/invite/codare) 
---

```shell
npm i tpb-scraper
```
```javascript
const tpbscraper = require('tpb-scraper')

async function output() {
    let info = await tpbscraper.search('oppenheimer', '100,300')
    console.log(info)
      }
    output()
    /*
[
  {
    category: [ 'Audio', 'Music' ],
    name: 'Oppenheimer Analysis - New Mexico FLAC',
    tpbLink: 'https://thepiratebay10.org/torrent/18725246/Oppenheimer_Analysis_-_New_Mexico_FLAC',
    magnetLink: 'magnet:?xt=urn:btih:CAAA71EC0579C0B85937D9385FB940C6DC7223C1&dn=Oppenheimer+Analysis+-+New+Mexico+FLAC&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce',
    uploadedDate: '10-12 2017',
    size: '456.85 MiB',
    uploader: ' standardstapler'
  }
]
*/
```
## Methods

### `.search(query, type);`
| Parameters | Required |     Type |               Accepted Values |
| ---------- | :------: | -------: | ----------------------------: |
| `query`    |   Yes    | `string` |   anything you want to search |
| `type`     |    No    | `string` | 100,200,300,400,500,600 etc   |

### Types
| Type | Category 
|---|---
| `100` | Auido 
| `200` | Video
| `300` | Applications
| `400` | Games
| `500` | +18 🤨
| `600` | Other