'use client';

import React from 'react';
import Link from 'next/link';
import { Background, type Edge, type Node, ReactFlow, useEdgesState, useNodesState } from 'reactflow';
import { BackgroundVariant } from '@reactflow/background';
import { edgeTypes, nodeTypes } from '@/types/reactFlow';
import 'reactflow/dist/style.css';

interface PersonDetailsProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

/**
 * Component for displaying person details using ReactFlow.
 *
 * @param {PersonDetailsProps} props - The initial nodes and edges for the ReactFlow component.
 * @returns {JSX.Element} The rendered ReactFlow component.
 */
const PersonDetails: React.FC<PersonDetailsProps> = ({ initialNodes, initialEdges }) => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      data-testid="person-page"
      defaultNodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
    >
      <Link
        href="/characters"
        className=" absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 z-[100]"
      >
        Go to Characters
      </Link>
      <Background color="#ccc" variant={BackgroundVariant.Dots} />
    </ReactFlow>
  );
};

export default PersonDetails;
