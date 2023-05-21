import {
  Card,
  CardBody,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY='5px'>
          <HStack spacing={2} mt={4}>
            <SkeletonCircle />
            <Skeleton height='20px' width='60px'></Skeleton>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreSkeleton;
