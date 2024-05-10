import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from 'tamagui'

import { styles } from './pagination.styles';

interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

function Pagination({ items, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize); 

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul style={styles.pagination}>
        {pages.map(page => (
          <li key={page} >
            <Button
              size="$3"
              onPress={() => {
                onPageChange(page)
              }}
              style={page === currentPage ? styles.pageItemActive : styles.pageItem}
            >
               {page}
            </Button>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
