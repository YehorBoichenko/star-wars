'use client';

import { Handle, Position, type NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

/**
 * Props for the CharachterNode component
 */
interface CharachterNodeProps extends NodeProps {
  data: {
    label: string;
  };
}

/**
 * CharachterNode component represents a node in a flowchart for a person
 * @param {CharachterNodeProps} props - The properties for the CharachterNode component
 * @returns {JSX.Element} The JSX element for the person node
 */
const CharachterNode: React.FC<CharachterNodeProps> = ({ data }) => {
  return (
    <div className="person-node">
      <div>
        <Text className="text-sm">Character:</Text>
        <Text className="text-lg font-bold">{data.label}</Text>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="handle-source"
      />
    </div>
  );
};

export default CharachterNode;
