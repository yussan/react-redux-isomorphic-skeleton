import React from 'react'
import ReactHelmet from 'react-helmet'
import {toCamelCase} from 'string-manager'
import configApp from '../../config/app'

export default (props) => {
    let {title, description, url, image, type, script, link} = props
    if(!title) title = configApp.title
    if(!description) description = configApp.description
    return (
        <ReactHelmet
            title={toCamelCase(title)}
            meta={[
                {'name': 'description', 'content': description},
                {'property': 'og:type', 'content': type || 'article'},
                {'property': 'og:title', 'content': toCamelCase(title)},
                {'property': 'og:url', 'content': url},
                {'property': 'og:image', 'content': image},
                {'property': 'og:description', 'content': description},
                {'property': 'twitter:card', 'content': type || 'summarry'},
                {'property': 'twitter:site', 'content': '@kompetisiindo'},
                {'property': 'twitter:title', 'content': title},
                {'property': 'twitter:description', 'content': description},
                {'property': 'twitter:image', 'content': image}
            ]}
            script={script}
            link={link}                
    />
    )
}

