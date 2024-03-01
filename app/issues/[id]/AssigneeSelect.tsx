"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/app/components";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  issue: Issue;
}

const AssigneeSelect = ({ issue }: Props) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

  const handleAssigneeSelect = async (userId: string) => {
    try {
      if (userId === "un-assigned") {
        await axios.patch(`/api/issues/${issue.id}`, {
          assignedToUserId: null,
        });
        toast.success("Successfully un-assigned the issue!");
      } else {
        await axios.patch(`/api/issues/${issue.id}`, {
          assignedToUserId: userId,
        });
        toast.success("Successfully assigned the issue!");
      }
    } catch (error) {
      toast.error("Changes could not be saved!");
    }
  };

  if (isLoading) return <Skeleton height={"2rem"} />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "un-assigned"}
        onValueChange={handleAssigneeSelect}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="un-assigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster position="top-right" />
    </>
  );
};

export default AssigneeSelect;
