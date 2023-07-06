/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 low_poly_book.glb
Author: tofet172 (https://sketchfab.com/tofet172)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-book-6371a95e29604262a366527390375de2
Title: Low Poly Book
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Book(props) {
  const { nodes, materials } = useGLTF('/low_poly_book.glb')

  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.y += (delta*0.5)))

  return (
    <group {...props} dispose={null} ref={ref}>
      <group scale={0.01}>
        <group position={[0, 207.81, 0]} rotation={[-Math.PI / 3, 0, 0]} scale={[17.534, 100, 147.61]}>
          <mesh geometry={nodes.Book_Cover_0.geometry} material={materials.Cover} />
          <mesh geometry={nodes.Book_Paper_0.geometry} material={materials.Paper} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/low_poly_book.glb')
