package com.project.configuration;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.beans.User;
import com.project.repository.UserRepository;

@Service
public class CustomUserDetailService implements UserDetailsService
{
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> optUser=userRepository.findByEmail(email);
		if(!optUser.isPresent())
			throw new UsernameNotFoundException("Email not found...");
		return optUser.map(CustomUserDetails::new).orElse(null);
	}

}
