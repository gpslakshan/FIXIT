import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueActions = () => {
  return (
    <Box className="mb-5">
      <Link href="/issues/new">
        <Button variant="solid">New Issue</Button>
      </Link>
    </Box>
  );
};

export default IssueActions;
