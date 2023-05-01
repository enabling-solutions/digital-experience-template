import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useExampleQuery } from "graphql-codegen-types";
import { Button } from "ui";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!);

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useExampleQuery.getKey(),
    useExampleQuery.fetcher(client)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useExampleQuery(client);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-3">
        <Button />
        <pre className="mt-4 p-4 bg-gray-200">
          {JSON.stringify(data?.episodes?.results, null, 2)}
        </pre>
      </main>
    </>
  );
}
