import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';
import { YoutubeLoader } from 'langchain/document_loaders/web/youtube';

export function getLoaderFromUrl (url) {
    let loader;
    if (url.includes('youtube.com') || url.includes('youtube.be')) {
        loader = YoutubeLoader.createFromUrl(url, {
        language: 'en',
        addVideoInfo: true
        });
    } else {
    loader = new CheerioWebBaseLoader(url);
    }
    return loader;
}