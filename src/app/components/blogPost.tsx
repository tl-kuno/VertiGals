import React from 'react'
import parse, { domToReact } from 'html-react-parser'

type BlogPostProps = {
    htmlContent: string
}

const BlogPost: React.FC<BlogPostProps> = ({ htmlContent }) => {
    const options = {
        replace: (domNode: any) => {
            if (domNode.name === 'a') {
                // Add `rel="noopener noreferrer"` to all links
                const props = domNode.attribs
                return (
                    <a
                        href={props.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {domToReact(domNode.children)}
                    </a>
                )
            }
        },
    }

    return <div>{parse(htmlContent, options)}</div>
}

export default BlogPost
