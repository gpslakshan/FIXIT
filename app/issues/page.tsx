import { Box, Button, Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <Box>
      <Box className="mb-5">
        <Button variant="solid">New Issue</Button>
      </Box>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              CreatedAt
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                {issue.title}
                <Box className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </Box>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default IssuesPage;
