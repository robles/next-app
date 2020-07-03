import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

export default function useToken({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
  const { data: session, mutate: mutateSession } = useSWR('/api/session');

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if use data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !session) return;

    if (
      // if redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !session?.isLoggedIn)
      // if redirectIfFound is also set, redirect if the user was found
      || (redirectIfFound && session?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [session, redirectIfFound, redirectTo]);

  return { session, mutateSession };
}
