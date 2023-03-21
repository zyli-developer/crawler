// You don't need to import RequestQueue anymore
import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
  maxRequestsPerCrawl: 20,
    async requestHandler({ $, request , enqueueLinks }) {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);
        await enqueueLinks();
    }
})

// Start the crawler with the provided URLs
await crawler.run(['https://crawlee.dev']);
await crawler.run(['https://www.baidu.com']);
