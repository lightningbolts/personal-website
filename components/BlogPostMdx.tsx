import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

const mdxRemoteOptions: NonNullable<MDXRemoteProps['options']> = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light',
            dark: 'github-dark',
          },
        },
      ],
    ],
  },
}

export async function BlogPostMdx({ source }: { source: string }) {
  return (
    <MDXRemote source={source} options={mdxRemoteOptions} />
  )
}
