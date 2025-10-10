import { MDXRemote } from 'next-mdx-remote/rsc';
import AmazonLink from '@/components/AmazonLink';
import ComparisonTable from '@/components/ComparisonTable';
import RatingStars from '@/components/RatingStars';
import ProsCons from '@/components/ProsCons';

const components = { AmazonLink, ComparisonTable, RatingStars, ProsCons };

export default function MDXRenderer({ source, options }){
  return <MDXRemote source={source} components={components} options={options} />;
}
