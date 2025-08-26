import React from "react";
import { MDXProvider } from "@mdx-js/react";

// Optional: Define custom components to use inside MDX
const components = {
    h1: (props) => <h1 className="mb-4">{props.children}</h1>,
    h2: (props) => <h2 className="mb-3">{props.children}</h2>,
    h3: (props) => <h3 className="mb-2">{props.children}</h3>,
    p: (props) => <p className="mb-3">{props.children}</p>,
    ul: (props) => <ul className="mb-3 list-unstyled">{props.children}</ul>,
    li: (props) => <li className="mb-1">• {props.children}</li>,
    blockquote: (props) => (
        <blockquote className="border-start ps-3 fst-italic text-muted">
            {props.children}
        </blockquote>
    ),
    a: (props) => <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>,
    // You can add buttons, code, images, etc.
};

const Content = ({ mdxComponent: MDXContent }) => {
    return (
        <div className="mdx-content">
            <MDXProvider components={components}>
                <MDXContent />
            </MDXProvider>
        </div>
    );
};

export default Content;
