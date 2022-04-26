import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useBeerComments } from '../../api/hook/beers';
import DetailComments from '../../components/detail/comments';
import { COMMENTS_PER_PAGE } from '../../constants';

const Detail = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data } = useBeerComments({ page, per_page: COMMENTS_PER_PAGE, beerId: Number(id) });
  const comments = data?.rows ?? [];
  return (
    <div>
      <DetailComments datas={comments} />
    </div>
  );
};

export default Detail;
