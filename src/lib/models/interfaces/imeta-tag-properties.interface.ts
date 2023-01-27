import type { IArticleMetaTagProperties } from './iarticle-meta-tag-properties.interface';
import type { ITwitterMetaTagProperties } from './itwitter-meta-tag-properties.interface';
import type { IImageMetaTagProperties } from './iimage-meta-tag-properties.interface';
import type { IOpenGraphMetaTagProperties } from './iopen-graph-meta-tag-properties.interface';

export interface IMetaTagProperties {
	url: string;
	title: string;
	description: string;
	keywords?: string[];
	image?: string | IImageMetaTagProperties;
	logoUrl?: string;
	searchUrl?: string;
	sitemapUrl?: string;
	rss?: string;
	atom?: string;
	robots?: string;
	twitter?: Partial<ITwitterMetaTagProperties> & {
		[tag: string]: string | undefined;
	};
	openGraph?: Partial<IOpenGraphMetaTagProperties> & {
		[tag: string]: string | undefined;
	};
	article?: Partial<IArticleMetaTagProperties> & {
		[tag: string]: string | undefined;
	};
}
