import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY='5px'>
          <HStack>
            <Skeleton height='32px' borderRadius={8} />
            <Text>
              <SkeletonText />
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreSkeleton;
