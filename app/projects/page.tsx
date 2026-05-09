"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setProjects([]);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    }

    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Projects</h1>

      {loading && <p>Loading...</p>}

      {!loading && projects.length === 0 && (
        <p>No projects yet.</p>
      )}

      {projects.map((p) => (
        <div
          key={p.id}
          style={{
            marginBottom: 20,
            padding: 12,
            border: "1px solid #333",
            borderRadius: 6,
          }}
        >
          <h2 style={{ marginBottom: 6 }}>{p.title}</h2>
          <p style={{ opacity: 0.8 }}>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
