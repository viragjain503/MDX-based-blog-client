import { useRouter } from "next/router";

function SingleArticle() {
    const router = useRouter();
    const singlearticle = router.query.singlearticle;
    return (
    <>
        <h1>{singlearticle} </h1>
    </>
  );
}

export default SingleArticle;
