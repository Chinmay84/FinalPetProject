package com.project.configuration;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@Service
public class JwtUtil {

	private String secret="${@swik%67}";
	
	public String extractUsername(String token) {
		return extractClaim(token,Claims::getSubject);
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);
	}

	private <T> T  extractClaim(String token,Function<Claims, T> claimsResolver) {
		final Claims claims=extractAllClaims(token);
		return claimsResolver.apply(claims);
	}

	private Claims extractAllClaims(String token) {
		
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}
	/**
	 * here it will check if the token has created before time limit 
	 * 10 hrs then will return true else false
	 * @param token
	 * @return
	 */
	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	/**
	 * this method is for generating token,as argument is username.so as user first time send request with username and password
	 * so here we will fetch the username,so based on that username we are going to create one token
	 * @param username
	 * @return
	 */
	public String generateToken(String username) {
		Map<String,Object> claims=new HashMap<>();
		
		return createToken(claims,username);
	}
	/**
	 * in this method create token subject argument is username
	 * here we are setting the time for 10 hours to expire the token
	 * and you can see we are using HS256 algorithm
	 * @param claims
	 * @param subject
	 * @return
	 */
	private String createToken(Map<String, Object> claims, String subject) {
		
		return Jwts.builder().setClaims(claims)
				.setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+(1000 * 60 *60 * 24 * 15)))
				.signWith(SignatureAlgorithm.HS256, secret)
				.compact();
	}
	
	/**
	 * here we are validation the token
	 */
	public Boolean validateToken(String token,UserDetails userDetails) {
		//basically token will be generated in encrpted string and from that String.we extract our username and password using
		final String username=extractUsername(token);
		//here we are validation the username and then check the token is expired or not
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
}
