import type { LoaderArgs } from "@remix-run/node";
import type { RouteHandle } from "~/types/common";

import { Link } from "@remix-run/react";

import { Container } from "~/components/Container";
import { permissions, validateUserPermissions, ValidationMode } from "~/utils/permissions";
import { getAuthorizedUser } from "~/utils/session.server";

export const handle: RouteHandle = {
  id: "yashiro.home",
  withScrollRestoration: true,
};

export const loader = async ({ request }: LoaderArgs) => {
  await getAuthorizedUser(request, async (user) =>
    validateUserPermissions(user, permissions("EDIT_USER"), ValidationMode.SOFT),
  );

  return null;
};

const YashiroRoute = () => {
  return (
    <Container className="flex items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">Hmm, what do you want to do?</h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <Link to="./users" role="button" className="button">
            Mange users
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default YashiroRoute;
