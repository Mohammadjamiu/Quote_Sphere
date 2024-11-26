import { GridPatternDashed } from "@/components/HomeGridPattern";
import { Redis } from "@upstash/redis";
import React from "react";

const redis = Redis.fromEnv();
export const revalidate = 0; // disable cache

const Home = async () => {
  const quote: string | null = await redis.srandmember<string>(
    "inspire_quotes"
  );

  return (
    <>
      <GridPatternDashed
        quote={quote || "Quote: “Default Quote” Author: Anonymous"}
      />
    </>
  );
};

export default Home;
