
/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import ImagePreloader from 'components/image-preloader';

const ImagePreloaderExample = () =>
	<div className="docs__design-assets-group">
		<h2>
			<a href="/devdocs/design/image-preloader">ImagePreloader</a>
		</h2>

		<ImagePreloader
			placeholder={ <div>Loading...</div> }
			src="https://en-blog.files.wordpress.com/2016/08/photo-1441109296207-fd911f7cd5e5.jpg" />
	</div>;

ImagePreloaderExample.displayName = 'ImagePreloader';

export default ImagePreloaderExample;
