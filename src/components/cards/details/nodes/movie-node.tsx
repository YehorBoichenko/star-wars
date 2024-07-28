'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

/**
 * FilmNode Component
 * Renders a node representing a film with label and handles for connection
 * 
 * @param {NodeProps} props - Props passed to the node
 * @returns {JSX.Element} - Rendered FilmNode component
 */
const FilmNode: React.FC<NodeProps> = ({ data }) => {
  const nodeClassName = "p-4 shadow-md rounded-md border-2 border-white bg-black";
  const textClassName = "text-base font-bold text-white";
  const subTextClassName = "text-xs text-center text-white";
  const handleClassName = "w-16 !bg-gray-400";

  return (
    <div className={nodeClassName}>
      <div>
        <Text className={textClassName}>{data.label}</Text>
        <Text className={subTextClassName}>Movie:</Text>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className={handleClassName}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className={handleClassName}
      />
    </div>
  );
}

export default FilmNode;
