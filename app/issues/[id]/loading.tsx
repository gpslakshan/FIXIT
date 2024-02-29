import { Box, Flex, Card } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssueDetailsPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="2" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card mt="5">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
