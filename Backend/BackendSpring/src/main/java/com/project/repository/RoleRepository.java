package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.beans.Role;
import com.project.beans.RoleName;

public interface RoleRepository extends JpaRepository<Role, Integer>{

	Optional<Role> findByRoleName(RoleName roleName);
}
