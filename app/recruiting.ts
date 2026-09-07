/** Recruiting season is the one switch that changes what the site asks of a
 *  visitor. While it's open, /join leads with the application and the navbar's
 *  CTA is Apply. Once it closes, /join is just the newsletter — so it's labelled
 *  "Newsletter" everywhere, and the CTA points there instead.
 *
 *  Next fall: flip RECRUITING to true, refresh the URL and deadline, and
 *  uncomment the recruitment blocks in app/routes/join.tsx. */
export const RECRUITING = false;

export const APPLY_FORM_URL = "https://forms.cloud.microsoft/r/As7Gzt0hAc";

/** A date string (e.g. "Sep 4") makes the CTA read "Apply by Sep 4"; null keeps
 *  it to the plain action. */
export const APPLY_DEADLINE: string | null = "Sep 4";

/** What /join is called in navigation. The page holds the newsletter
 *  year-round and the application only in season. */
export const JOIN_LINK_LABEL = RECRUITING ? "Join" : "Newsletter";
