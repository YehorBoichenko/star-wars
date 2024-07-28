'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

/**
 * Component for rendering a starship node in the React Flow diagram.
 * @param data - Node data including the label.
 */
export default function ShipNode({ data }: NodeProps) {
  return (
    <div className="p-4 shadow-md rounded-md border-2 border-white bg-blue-500">
      <NodeContent label={data.label} />
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-gray-400"
      />
    </div>
  );
}

/**
 * Component for rendering the content of a node.
 * @param label - Label to be displayed inside the node.
 */
function NodeContent({ label }: { label: string }) {
  return (
    <div>
      <Text className="text-base font-bold text-white">{label}</Text>
      <Text className="text-white text-center text-xs">Starship</Text>
    </div>
  );
}
